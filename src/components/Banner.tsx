import { TagChevron } from "phosphor-react";

export function Banner() {
  return (
    <div className="flex-1">
      <div className="flex justify-center">
        <div className=" p-80 h-full w-full flex items-center justify-between">
          <strong className="text-2xl">Selecione uma aula</strong>
          <TagChevron size={100} />
          
        </div>
      </div>
    </div>
  );
}
