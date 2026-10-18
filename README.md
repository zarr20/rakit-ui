# Rakit UI (`@zarr20/rakit-ui`)

> Enterprise UI Component Library - Rakit UI.

`@zarr20/rakit-ui` is a standalone, modular React component library providing core user interface primitives:
- **Button**: Highly customizable buttons with multiple variants (primary, secondary, outline, danger, success, ghost), loading spinners, and icon support.
- **Badge**: Status indicators, MethodBadge (HTTP GET, POST, PUT, DELETE, PATCH), and StatusCodeBadge.
- **Card**: Modular container with sub-components: CardHeader, CardTitle, CardDescription, CardContent, CardFooter, and FeatureBanner.
- **Modal**: Accessible React Portal-based dialog modal with responsive sizes (sm–full) and sub-components.
- **EmptyState**: Informative visual placeholder for empty states or unmatched search filters.
- **Form Fields & Controls (`/field`)**:
  - `FieldWrapper`: Base label, required indicator, helper text, error styling, and tooltip hint.
  - `TextField`: Full-featured text input (text, email, password with eye toggle, number, prefix/suffix, clear button).
  - `TextArea`: Multiline text input with character counter and auto-resize.
  - `Autocomplete`: Accessible combobox with query filtering, loading indicator, and keyboard navigation.
  - `Select` & `MultiSelect`: Single & multi-tag chips dropdown with internal search.
  - `Checkbox` & `CheckboxGroup`: Standalone checkbox, card options, indeterminate state, and group binding.
  - `Radio` & `RadioGroup`: Radio selection with horizontal/vertical layouts and card options.
  - `Switch`: Smooth animated toggle switch with custom icon support.

---

## 📦 Installation

### From NPM Registry:
```bash
npm install @zarr20/rakit-ui
```

### Or Directly from Git Repository:
```bash
npm install git+https://github.com/zarr20/rakit-ui.git
```

---

## 🚀 Basic Usage

### 1. Import CSS Styles
Add this import at the root of your application (e.g., `main.tsx` or `App.tsx`):
```tsx
import '@zarr20/rakit-ui/styles.css';
```

---

### 2. Modular Folder Structure

`rakit-ui` organizes components into modular directories:

```text
src/
├── components/
│   └── ui/
│       ├── button/
│       ├── badge/
│       ├── card/
│       ├── modal/
│       ├── empty-state/
│       └── field/
│           ├── field-wrapper/
│           ├── text-field/
│           ├── textarea/
│           ├── autocomplete/
│           ├── select/
│           ├── multi-select/
│           ├── checkbox/
│           ├── radio/
│           ├── switch/
│           └── index.ts
├── types/
│   └── ui/
│       └── field/
├── utils/
│   └── ui/
└── index.ts
```

---

### 3. Component Usage Example

```tsx
import {
  Button,
  MethodBadge,
  StatusCodeBadge,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Modal,
  TextField,
  EmptyState
} from '@zarr20/rakit-ui';
import { useState } from 'react';

export function ExampleGeneralPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <Card padding="large" className="space-y-4 max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Rakit UI Dashboard</CardTitle>
        <div className="flex items-center gap-2">
          <MethodBadge method="POST" size="sm" />
          <StatusCodeBadge statusCode={201} />
        </div>
      </CardHeader>

      <CardContent>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          clearable
          onClear={() => setSearch('')}
          placeholder="Search items..."
        />

        <div className="mt-4">
          <Button variant="primary" size="sm" onClick={() => setIsModalOpen(true)}>
            Open Dialog
          </Button>
        </div>
      </CardContent>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm Action"
        description="Built-in confirmation modal dialog from rakit-ui"
      >
        <p className="text-sm text-slate-600">Accessible and production-ready modal content.</p>
      </Modal>
    </Card>
  );
}
```

---

## 🛠️ Build & Development

```bash
# Navigate to package directory
cd packages/rakit-ui

# Install dependencies
npm install

# Build library (ESM, CJS, and .d.ts type declaration files)
npm run build

# Build library and prepare isolated ./npm distribution directory
npm run build:npm

# Start interactive Storybook
npm run storybook
```

---

## 🚀 Distribution & Deployment (`./npm`)

The `./npm` folder is an isolated distribution bundle ready for publishing or deploying to npm without devDependencies or development source files:

```bash
# 1. Build and synchronize dist to ./npm
npm run build:npm

# 2. Deploy directly to the rakit-ui distribution repo
npm run deploy:npm

# Or publish to NPM Registry:
cd npm
npm publish --access public
```

---

## 👤 Author
**Rakit (Dzarr Al Ghifari)**

---

## 📄 License
MIT License © 2026 Rakit (Dzarr Al Ghifari)
