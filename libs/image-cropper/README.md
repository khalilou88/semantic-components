# image-cropper

# Angular Image Cropper Component

A modern, feature-rich image cropping component built with Angular and styled with Tailwind CSS following shadcn/ui design principles.

## 🎯 Core Features

### Image Upload & Management

- **Drag & Drop Interface**: Intuitive drag-and-drop zone for seamless file uploads
- **Click to Browse**: Traditional file browser fallback option
- **File Validation**: Accepts only image file formats (JPEG, PNG, WEBP, etc.)
- **Visual Feedback**: Clean upload interface with clear instructions and visual cues

### Interactive Cropping Tools

#### Visual Crop Selection

- **Draggable Crop Box**: Move the selection area by clicking and dragging
- **Resize Handles**: 8 resize handles (4 corners + 4 edges) for precise control
- **Real-time Visual Feedback**: Immediate visual response to all crop adjustments
- **Overlay Effect**: Dark overlay outside crop area for better focus

#### Crop Controls

- **Corner Resize**: Diagonal resizing from any corner (NW, NE, SW, SE)
- **Edge Resize**: Horizontal/vertical resizing from edges (N, S, E, W)
- **Proportional Scaling**: Maintain aspect ratios during resize operations
- **Boundary Constraints**: Automatic prevention of crop area going outside image bounds

### Aspect Ratio Management

- **Preset Ratios**: Common aspect ratios available
  - Free form (no constraints)
  - 1:1 (Square)
  - 4:3 (Standard photo)
  - 16:9 (Widescreen)
  - 3:2 (Classic photo)
- **Automatic Adjustment**: Height automatically adjusts when width changes (and vice versa)
- **Lock Ratio**: Maintains selected aspect ratio during manual resizing

### Precision Controls

#### Manual Input Fields

- **Dimension Controls**: Precise width and height input
- **Position Controls**: Exact X and Y coordinate positioning
- **Real-time Sync**: Manual inputs sync with visual crop box
- **Validation**: Input validation to prevent invalid crop areas

#### Export Configuration

- **Format Selection**: Multiple output formats
  - PNG (lossless, transparency support)
  - JPEG (compressed, smaller file size)
  - WEBP (modern format, excellent compression)
- **Quality Control**: Adjustable quality slider (1-100%)
- **Real-time Quality Display**: Current quality value shown on slider

### Preview & Feedback

#### Live Preview

- **Canvas Preview**: Real-time preview of cropped result
- **Accurate Representation**: Preview matches exact output
- **Dimension Display**: Shows final output dimensions
- **Responsive Design**: Preview adapts to available space

#### Visual Indicators

- **Crop Dimensions**: Current crop size displayed below preview
- **Quality Indicator**: Current quality setting visible on slider
- **Status Feedback**: Clear indication of current operation state

### User Experience

#### Responsive Design

- **Mobile Friendly**: Works on touch devices
- **Adaptive Layout**: Grid layout adjusts to screen size
- **Desktop Optimized**: Full feature set on larger screens
- **Touch Support**: Touch-friendly resize handles and drag operations

#### Accessibility

- **Keyboard Navigation**: Form controls accessible via keyboard
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators for interactive elements
- **Color Contrast**: High contrast design following accessibility guidelines

### Advanced Functionality

#### Image Processing

- **High Resolution Support**: Handles large images efficiently
- **Coordinate Mapping**: Accurate mapping between display and actual image coordinates
- **Canvas Optimization**: Efficient canvas operations for smooth performance
- **Memory Management**: Proper cleanup of image resources

#### Export & Download

- **One-Click Download**: Instant download of cropped image
- **Custom Filename**: Automatic filename generation with format extension
- **Blob Generation**: Efficient binary data handling
- **Quality Preservation**: Maintains image quality based on settings

## 🛠 Technical Implementation

### Component Architecture

- **Standalone Component**: Modern Angular standalone component
- **TypeScript**: Full TypeScript support with proper typing
- **Reactive Forms**: Two-way data binding with FormsModule
- **ViewChild Integration**: Direct DOM access for canvas operations

### Performance Optimizations

- **Efficient Rendering**: Minimal DOM updates during drag operations
- **Event Optimization**: Proper event handling and cleanup
- **Canvas Performance**: Optimized canvas drawing operations
- **Memory Efficient**: Proper resource cleanup and garbage collection

### Browser Compatibility

- **Modern Browsers**: Full support for Chrome, Firefox, Safari, Edge
- **Canvas API**: Utilizes HTML5 Canvas for image processing
- **File API**: Modern file handling capabilities
- **Progressive Enhancement**: Graceful degradation for older browsers

## 📋 Usage Requirements

### Dependencies

- Angular 17+ (standalone component support)
- FormsModule (for two-way data binding)
- Tailwind CSS (for styling)
- Modern browser with Canvas API support

### Installation

```typescript
import { ImageCropperComponent } from './image-cropper.component';

// In your component or module
@Component({
  imports: [ImageCropperComponent],
  // ...
})
```

### Basic Usage

```html
<app-image-cropper></app-image-cropper>
```

## 🎨 Design System

### shadcn/ui Aesthetic

- **Modern Design**: Clean, minimal interface design
- **Consistent Spacing**: Proper spacing and layout hierarchy
- **Color Palette**: Professional color scheme with proper contrast
- **Typography**: Clear, readable text with proper font weights

### Component Styling

- **Card-based Layout**: Organized content in card containers
- **Button Consistency**: Uniform button styling and states
- **Form Controls**: Consistent input and select styling
- **Interactive States**: Proper hover, focus, and active states

## 🔧 Configuration Options

### Customizable Settings

- **Default Crop Size**: Initial crop area dimensions
- **Minimum Crop Size**: Smallest allowed crop area
- **Supported Formats**: Configurable export formats
- **Quality Ranges**: Adjustable quality limits
- **Aspect Ratio Presets**: Customizable ratio options

### Event Hooks

- **Image Load**: Callback when image is loaded
- **Crop Change**: Event fired when crop area changes
- **Export Complete**: Notification when download completes
- **Error Handling**: Comprehensive error handling and reporting

This component provides a complete, professional-grade image cropping solution with an intuitive interface and powerful functionality suitable for any modern web application.
