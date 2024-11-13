'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const SearchInput = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback((username: string) => {
    const params = new URLSearchParams(searchParams);

    if (username) {
      params.set('username', username);
    } else {
      params.delete('username');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-[474px] lg:w-[484px] absolute top-8 left-1/2 -translate-x-1/2">
      <div className="relative">
        <input
          type="text"
          defaultValue={searchParams.get('username')?.toString()}
          onChange={(event) => handleChange(event.target.value)}
          placeholder="username"
          className="w-full pl-[50px] pr-4 py-[14px] border-2 border-[#20293A] focus:border-[#3662E3] rounded-xl text-[#CDD5E0] placeholder:font-medium placeholder:text-[#4A5567] bg-[#20293A] outline-none"
        />
        <div className="absolute top-1/2 left-[15px] -translate-y-1/2 bg-[#4A5567] w-6 h-6 [mask:_url('/Search.svg')_no-repeat]"></div>
      </div>
    </div>
  );
};