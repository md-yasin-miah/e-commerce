import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Store</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Discover amazing products and great deals. Shop with confidence and enjoy
        a seamless shopping experience.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/products">Browse Products</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/auth/signin">Sign In</Link>
        </Button>
      </div>
    </main>
  );
} 