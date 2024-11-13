import { searchUserByUsername } from "@/actions/search-user-by-username";
import { Profile } from "@/components/profile";
import { SearchInput } from "@/components/search-input";

interface Props {
  searchParams: Promise<{username: string}>
}

export default async function HomePage({ searchParams }: Props) {
  const username = (await searchParams).username || 'github';
  const user = await searchUserByUsername(username);
  
  return (
    <main className="min-h-screen bg-[#20293A]">
      <div className="h-60 bg-[url('/hero-image-github-profile.png')] bg-center bg-cover bg-no-repeat"></div>
      <SearchInput />
      <Profile user={user} />
    </main>
  );
}
