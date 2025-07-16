'use client';
import Link from "next/link";
import { Search, ShoppingCart } from 'lucide-react';

export default function NavBar() {
     return (
  <div className="absolute top-2 left-0 right-0 z-10 w-full bg-black rounded-2xl px-12">
    <div className="flex items-center justify-between py-4">
      {/* Logo */}
      <img src="jbl.png" alt="logo" className="h-6 w-8" />

      {/* Centered Menu */}
      <ul className="hidden md:flex gap-6 text-white absolute left-1/2 transform -translate-x-1/2">
        <a href="#Header" className="cursor-pointer">Home</a>
        <a href="#About" className="cursor-pointer">About</a>
        <a href="#Products" className="cursor-pointer">Products</a>
        <a href="#Collections" className="cursor-pointer">Collections</a>
      </ul>

      {/* Right Icons */}
      <div className="flex gap-4">
        <Search className="w-5 h-5 text-white" />
        <ShoppingCart className="w-5 h-5 text-white" />
      </div>
    </div>
  </div>
);

        
}