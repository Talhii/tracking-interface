# Package Tracking Interface

A modern, responsive web application built with Next.js and Material-UI for managing and tracking packages efficiently.

## Features

- **Comprehensive Tracking Table**: View all packages with key information including tracking numbers, received dates, weight & dimensions, descriptions, and repack options
- **Interactive Photo Viewer**: Click on the photo icon to open a detailed popup window showing package details and main photo
- **Inline Editing**: Edit repack options directly in the table with save/cancel functionality
- **Status Tracking**: Visual status indicators for different package states (Received, Processing, Shipped)
- **Responsive Design**: Built with Material-UI components for a professional and mobile-friendly interface

## Table Columns

1. **NO** - Package sequence number
2. **TRACKING** - Unique tracking identifier
3. **RECEIVED** - Date when package was received
4. **WEIGHT & DIMENSIONS** - Package weight and physical dimensions
5. **DESCRIPTION** - Detailed description of package contents
6. **REPACK OPTION** - Selectable repackaging service level (Standard, Express, Premium)
7. **STATUS** - Current package status with color-coded indicators
8. **PHOTOS** - Clickable photo icon to view package details
9. **ACTIONS** - Edit functionality for package information

## Technology Stack

- **Frontend**: Next.js 15 with TypeScript
- **UI Framework**: Material-UI (MUI) v7
- **Styling**: Emotion (CSS-in-JS)
- **Icons**: Material-UI Icons
- **Development**: ESLint, Tailwind CSS

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with Material-UI theme
│   ├── page.tsx        # Main tracking interface page
│   └── globals.css     # Global styles
```

## Features in Detail

### Main Table View
- Displays all packages in a sortable, filterable table
- Hover effects and visual feedback
- Responsive design that works on all screen sizes

### Photo Popup Window
- Click any photo icon to open detailed view
- Shows package photo alongside all information
- Clean, modal-based interface for focused viewing

### Inline Editing
- Edit repack options directly in the table
- Save/cancel functionality with visual feedback
- Maintains data integrity during editing

## Future Enhancements

- Add search and filtering capabilities
- Implement sorting by different columns
- Add bulk operations for multiple packages
- Integrate with backend APIs for real data
- Add user authentication and role-based access
- Implement real-time updates and notifications

## Contributing

This is a demo application showcasing modern web development practices with Next.js and Material-UI. Feel free to use this as a starting point for your own tracking applications.
