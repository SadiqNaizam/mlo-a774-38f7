import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/Login/LoginForm';

/**
 * Represents the main landing page of the application, which is the Login Page.
 * This component orchestrates the overall layout and displays the central login form.
 * It follows the 'page' component pattern, composing a layout component (`MainAppLayout`)
 * with a feature component (`LoginForm`).
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default IndexPage;
