import FormHomeCharactersWidget from "@/wigets/form/FormHomeCharactersWidget";
import FormTestRadioAndCheckbox from "@/entities/form/FormTestRadioAndCheckbox";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-white text-black justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <FormHomeCharactersWidget/>
        <FormTestRadioAndCheckbox/>
    </div>
  );
}
