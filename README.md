# E-commerce Platform

A modern e-commerce platform built with Next.js, tRPC, and TypeScript.

## Features

- 🛍️ Product catalog with categories
- 🔐 User authentication
- 🛒 Shopping cart functionality
- 📦 Order management
- ⚡ Fast and responsive UI
- 🔒 Type-safe API with tRPC
- 🎨 Modern UI components

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **API:** tRPC
- **Database:** Prisma
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **State Management:** React Query
- **Form Handling:** Zod

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/e-commerce.git
cd e-commerce
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Fill in the required environment variables in `.env.local`

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
├── lib/             # Utility functions and configurations
│   ├── trpc/        # tRPC setup and routers
│   └── db/          # Database configuration
├── styles/          # Global styles
└── types/           # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
