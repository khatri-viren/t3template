import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SimpleUploadButton from "./simple-upload-button";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b border-neutral-200 p-4 text-2xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
