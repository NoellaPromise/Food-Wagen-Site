# FoodWagen - Food Delivery Web App

A responsive, accessible, and production-quality web application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- View a list of food items
- Search for foods
- Add, edit, and delete foods
- Form validation with error messages
- Loading states and empty states
- Smooth animations with Framer Motion
- Fully responsive design

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (with `.food-` prefix for custom classes)
- **Axios** (for API requests)
- **Framer Motion** (for animations)
- **React Testing Library + Jest** (for testing)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Run Tests

```bash
npm test
```

## API

The app uses the mock API:
`https://6852821e0594059b23cdd834.mockapi.io/Food`

Endpoints:
- `GET /Food` - Get all foods
- `GET /Food?name=[searchParam]` - Search foods
- `POST /Food` - Create food
- `PUT /Food/:id` - Update food
- `DELETE /Food/:id` - Delete food

## Deployment

The app is configured for Vercel deployment. To deploy:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles with .food- prefix classes
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Header.tsx        # Header component
│   ├── Footer.tsx        # Footer component
│   ├── SearchBar.tsx     # Search bar component
│   ├── FoodCard.tsx      # Food card component
│   ├── FoodList.tsx      # Food list component
│   ├── FoodFormModal.tsx # Form modal component
│   └── __tests__/        # Component tests
├── lib/
│   ├── api.ts            # API utilities
│   ├── types.ts          # TypeScript types
│   ├── validation.ts     # Form validation
│   └── __tests__/        # API tests
└── public/               # Static assets
```

## Testing

The project includes tests for:
1. Component rendering (FoodCard)
2. User interactions (FoodFormModal)
3. API mocking (foodApi)

All test IDs follow the `food-` prefix convention.

## License

MIT

