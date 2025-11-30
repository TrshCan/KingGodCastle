# Toast Notification Component

A reusable toast notification system for React with Tailwind CSS.

## Features

- 4 notification types: success, error, warning, info
- Auto-dismiss with configurable duration
- Manual close button
- Smooth animations
- Stacked notifications in top-right corner
- Fully styled with Tailwind CSS

## Usage

### Basic Usage

```jsx
import { useToast } from '../../contexts/ToastContext';

function MyComponent() {
  const toast = useToast();

  const handleClick = () => {
    toast.success('Operation completed successfully!');
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

### Available Methods

```jsx
const toast = useToast();

// Success notification (green)
toast.success('Success message', 3000); // duration in ms (optional)

// Error notification (red)
toast.error('Error message', 5000);

// Warning notification (yellow)
toast.warning('Warning message');

// Info notification (blue)
toast.info('Info message');

// Generic method
toast.addToast('Custom message', 'success', 3000);
```

### Custom Duration

```jsx
// Show for 5 seconds
toast.success('This will show for 5 seconds', 5000);

// Show indefinitely (manual close only)
toast.error('This stays until closed', 0);
```

### In API Calls

```jsx
const handleSubmit = async () => {
  try {
    await api.post('/data', formData);
    toast.success('Data saved successfully!');
  } catch (error) {
    toast.error('Failed to save data. Please try again.');
  }
};
```

## Customization

Edit `Toast.jsx` to customize:
- Colors and styles in the `styles` object
- Icon colors in the `iconColors` object
- Animation duration (currently 300ms)
- Default position (currently top-right)
