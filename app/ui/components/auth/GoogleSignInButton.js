'use client'

import { useRouter } from "next/navigation";

const { signInWithGoogle } = require("@/src/firebase");
const { Button } = require("@mui/material");

function GoogleSignInButton() {
  const router = useRouter()

  return (
    <Button
      type="button"
      fullWidth
      variant="contained"
      onClick={async () => {
        await signInWithGoogle();
        router.push("/")
      }}
      sx={{ mt: 3, mb: 2 }}
    >
      Sign In With Google
    </Button>
  );
}
export default GoogleSignInButton;
