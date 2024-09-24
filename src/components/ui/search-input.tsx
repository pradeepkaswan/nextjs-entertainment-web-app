"use client";

import * as React from "react";
import { useQueryState } from "nuqs";
import { useDebouncedCallback } from "use-debounce";

import { Input, type InputProps } from "@/components/ui/input";

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [searchQuery, setSearchQuery] = useQueryState("search", {
      defaultValue: "",
      shallow: false,
      clearOnDefault: true,
    });

    const useDebounced = useDebouncedCallback(setSearchQuery, 300);

    return (
      <Input
        ref={ref}
        type="search"
        defaultValue={searchQuery}
        className={className}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        onChange={(e) => useDebounced(e.target.value)}
        {...props}
      />
    );
  }
);

SearchInput.displayName = "SearchInput";

export { SearchInput };
