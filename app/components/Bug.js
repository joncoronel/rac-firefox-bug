"use client";

import { Button } from "react-aria-components";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Bug() {
  const router = useRouter();
  return (
    <>
      <Button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 "
        onPress={() =>
          router.push(
            "https://react-spectrum.adobe.com/react-spectrum/Button.html#button"
          )
        }
      >
        RAC Button that causes the navigation bug
      </Button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 "
        onClick={() =>
          router.push(
            "https://react-spectrum.adobe.com/react-spectrum/Button.html#button"
          )
        }
      >
        Regular button that does not cause the navigation bug
      </button>
      <Link className="underline" href="/test-navigation">
        Regular next/link to test navigation after bug is triggered
      </Link>
    </>
  );
}
