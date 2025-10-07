import React from 'react';
import { CartIcon } from './CartIcon';
import { ProfileDropdown } from './ProfileDropdown';
import './assets/styles.css'
import Logo from './Logo';
import { CategoryNavigation } from './CategoryNavigation';
export function Header({ cartCount, username, onCategoryClick }) {
  return (
    <header className="header">
      <div className="header-content">
        {/* Left - Logo */}
        <Logo />
        {/* Center - Categories */}
        <div className="header-center">
          <CategoryNavigation onCategoryClick={onCategoryClick} />
        </div>
        {/* Right - Cart + Profile */}
        <div className="header-actions">
          <CartIcon count={cartCount} />
          <ProfileDropdown username={username} />
        </div>
      </div>
    </header>
  );
}
