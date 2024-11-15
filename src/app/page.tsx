import FormHomeCharactersWidget from "@/wigets/form/FormHomeCharactersWidget";
import FormTestRadioAndCheckboxWidget from "@/wigets/form/FormTestRadioAndCheckboxWidget";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <FormTestRadioAndCheckboxWidget/>
            <FormHomeCharactersWidget/>
    </div>
  );
}
