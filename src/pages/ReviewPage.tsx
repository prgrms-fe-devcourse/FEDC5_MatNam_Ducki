import { useRef, useState } from 'react';

export default function ReviewPage() {
  const [image, setImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleImageInputClick = () => {
    if (!imageInputRef.current) {
      return;
    }
    imageInputRef.current.click();
    console.log('imageInputRef.current', imageInputRef.current);
  };
  return (
    <>
      <article className="relative bg-gray-100 p-5">
        <form>
          <section className="pb-5">
            <p className="mb-2">채널 선택</p>
          </section>
          <section className="relative">
            <input
              placeholder="제목을 입력해주세요."
              className="border-0.5 mb-5 w-full border-gray-600"
            />
            <section className="mb-[1.63rem] flex gap-[0.81rem] overflow-auto whitespace-nowrap">
              <input
                ref={imageInputRef}
                className="hidden border-[1.5px] border-gray-600"
                type="file"
                accept="image/*"
              />
              {image ? (
                <div ref={elementRef} className="w-full">
                  <div className="relative aspect-[5/3] w-full flex-shrink-0 overflow-hidden rounded-xl border-[1.5px] border-gray-600 bg-white">
                    <img
                      className="aspect-[5/3] w-full object-cover"
                      src={image}
                      alt="이미지 미리보기"
                    />
                    <button
                      type="button"
                      className="absolute bottom-1 right-1 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                      이미지 버튼
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={handleImageInputClick}
                  className="flex aspect-[5/3] w-full flex-shrink-0 flex-col items-center justify-center rounded-[0.3125rem] border-[1.5px] border-gray-600 bg-white">
                  <span className="text-[0.875rem] text-gray-400">
                    사진 추가
                  </span>
                </div>
              )}
            </section>
            <textarea
              name="content"
              placeholder="내용을 작성해보세요."
              className="w-full resize-none bg-gray-100 pb-[0.56rem] pl-1.5 pt-[0.5rem] text-[0.8125rem] placeholder:text-gray-300 focus:outline-none cs:h-40"
            />
            <button className="fixed bottom-8 right-6 h-10 w-16 transition-none disabled:opacity-50 md:right-1/2 md:translate-x-[22.5rem]">
              등록
            </button>
          </section>
        </form>
      </article>
    </>
  );
}
