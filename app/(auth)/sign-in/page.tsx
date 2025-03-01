"use client";

import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validation";
import React from "react";

const Page = () => {
  return (
    <div>
      <AuthForm
        type="SIGN_IN"
        schema={signInSchema}
        defaultValues={{
          email: "",
          password: "",
        }}
        onSubmit={() => {}}
      />
    </div>
  );
};

export default Page;
