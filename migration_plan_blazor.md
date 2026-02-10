# Migration Plan: Next.js to Blazor Server

This document outlines the strategy for migrating the **Spider Fleet** SaaS platform from Next.js 14 to **ASP.NET Core Blazor Server**.

## 1. Architecture Mapping

| Feature | Next.js (Current) | Blazor Server (Target) |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 (App Router) | ASP.NET Core 8.0 Blazor Server |
| **Language** | TypeScript | C# 12 |
| **Routing** | File-based (`src/app/`) | `@page` directive in Razor components |
| **Layouts** | `layout.tsx` | `MainLayout.razor` (inheriting `LayoutComponentBase`) |
| **Components** | React functional components | Razor components (`.razor`) |
| **State Management** | Context API / `useLanguage` | Scoped Services / Dependency Injection |
| **i18n** | `translations.ts` + dictionary | Resource files (`.resx`) or `IStringLocalizer` |
| **Styling** | Tailwind CSS | Tailwind CSS (PostCSS integration) |
| **Icons** | Material Symbols / Heroicons | Material Symbols / Font Awesome / Blazor Icons |
| **Interactivity** | Client components (`'use client'`) | SignalR (Automatic in Blazor Server) |

## 2. Component Mapping

| React Component | Blazor Component | Notes |
| :--- | :--- | :--- |
| `Sidebar.tsx` | `Sidebar.razor` | Use `NavLink` for active route tracking. |
| `StatsCard.tsx` | `StatsCard.razor` | Pass parameters for Title, Value, and Icon. |
| `StatusBadge.tsx` | `StatusBadge.razor` | Use `RenderFragment` for labels or string parameters. |
| `DocumentDrawer.tsx` | `DocumentDrawer.razor` | Migrate logic to C#; use a Modal service. |
| `LanguageContext` | `ILanguageService` | Register as `Scoped` to persist during session. |

## 3. Data Model Migration

The mock data interfaces in `src/lib/mockData.ts` will be migrated to C# classes/records:

```csharp
// Example Mapping
public record Vehicle(
    string Id,
    string Model,
    string Plate,
    string Status, // Use Enum for better type safety
    string Driver,
    int FuelLevel,
    int Odometer
);
```

## 4. Folder Structure (Blazor)

```
SpiderFleet.Blazor/
├── Components/
│   ├── Layout/
│   │   ├── MainLayout.razor
│   │   └── NavMenu.razor
│   ├── UI/
│   │   ├── StatsCard.razor
│   │   └── StatusBadge.razor
│   └── Pages/
│       ├── Login.razor
│       ├── Vehicles/
│       │   ├── VehicleList.razor
│       │   └── VehicleDetail.razor
│       └── Settings/
│           ├── Users.razor
│           └── Constants.razor
├── Models/
│   ├── Vehicle.cs
│   └── AuditLog.cs
├── Services/
│   ├── IVehicleService.cs
│   └── LanguageService.cs
├── Resources/
│   ├── App.en.resx
│   └── App.es.resx
├── wwwroot/
│   └── css/
│       └── app.css (Tailwind output)
└── Program.cs (DI configuration)
```

## 5. Migration Roadmap

### Phase 1: Infrastructure & Layout
1. **Setup Project**: Initialize ASP.NET Core Blazor Server project.
2. **Tailwind Integration**: Configure `tailwind.config.js` and PostCSS within the .NET project.
3. **Global Layout**: Port `layout.tsx` to `MainLayout.razor`.
4. **Sidebar**: Migrate `Sidebar.tsx` to `NavMenu.razor`, replacing Next.js `Link` with Blazor `NavLink`.

### Phase 2: Data & Localization
1. **Models**: Create C# POCOs for all data types (Vehicle, Driver, Log).
2. **Services**: Implement `MockDataService` in C# to provide the data currently in `mockData.ts`.
3. **i18n**: Migrate `translations.ts` to `.resx` files. Create a custom `ILocalizer` if JSON-based keys are preferred for easier transition.

### Phase 3: UI Components
1. **Atomic Components**: Convert `StatsCard`, `StatusBadge`, and `Breadcrumbs` to Razor components.
2. **Logic Porting**: Replace React `useState` with C# properties and `StateHasChanged()` if necessary.
3. **Drawers**: Implement a generic `DrawerService` in Blazor to handle the sliding panel logic previously managed by Headless UI.

### Phase 4: Pages & Routing
1. **Login Page**: Port `login/page.tsx`. Use Blazor `EditForm` for validation.
2. **Vehicle List**: Port `vehicles/page.tsx`. Implement search and filter logic in the component code-behind.
3. **Vehicle Detail**: Port the complex tabbed interface in `vehicles/[id]/page.tsx`. Use a simple `int activeTab` state to toggle visibility.

### Phase 5: Interactivity & Refinement
1. **Signals**: Replace `useEffect` logic with `OnInitializedAsync` or `OnAfterRenderAsync`.
2. **Real-time**: Leverage SignalR for any real-time dashboard updates (e.g., simulated GPS movements).
3. **Cleanup**: Remove Next.js artifacts and optimize the .NET build pipeline.

## 6. Example: StatsCard Migration

### Before (React)
```tsx
export default function StatsCard({ title, value, icon, trend }: Props) {
  return (
    <div className="p-4 bg-white rounded-xl border">
      <span className="material-symbols-outlined">{icon}</span>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}
```

### After (Razor)
```razor
<div class="p-4 bg-white rounded-xl border">
    <span class="material-symbols-outlined">@Icon</span>
    <h3 class="text-sm font-bold">@Title</h3>
    <p class="text-xl font-black">@Value</p>
</div>

@code {
    [Parameter] public string Title { get; set; } = "";
    [Parameter] public string Value { get; set; } = "";
    [Parameter] public string Icon { get; set; } = "";
}
```

## 7. Technical Risks & Mitigation

| Risk | Impact | Mitigation Strategy |
| :--- | :--- | :--- |
| **Tailwind in Blazor** | Moderate | Use `npx tailwindcss -i ./wwwroot/css/input.css -o ./wwwroot/css/app.css --watch` during development to ensure styles are updated. |
| **Headless UI Replacements** | High | Use **MudBlazor** or **Blazored.Modal** to handle complex UI behaviors (Drawers, Dialogs) without writing manual JS interop. |
| **SignalR Latency** | Low | For a SaaS dashboard, SignalR overhead is minimal. Use `RenderMode.InteractiveServer` for low-latency UI updates. |
| **JS Library Porting** | Moderate | The current app uses very few JS-heavy libraries. Use `IJSRuntime` only for the Map view integration if a native Blazor Map component is not available. |
| **Learning Curve** | High | Ensure the team is familiar with C# Async/Await patterns and the Blazor component lifecycle (`OnInitializedAsync`). |

## 8. Conclusion
Migrating to Blazor Server will provide a more unified development experience for .NET teams, leveraging strong typing and direct access to server-side resources while maintaining the modern responsive UI built with Tailwind CSS.
