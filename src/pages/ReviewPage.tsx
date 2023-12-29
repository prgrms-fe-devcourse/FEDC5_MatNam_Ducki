import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';

export default function ReviewPage() {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  const createURL = (selectedFile: File | null) => {
    if (!selectedFile) {
      return '';
    }

    return URL.createObjectURL(selectedFile);
  };

  const handleImageFilesChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files) {
      return;
    }

    setImage(createURL(event.target.files[0]));
    setFile(event.target.files[0]);
  };

  const handleImageInputClick = () => {
    if (!imageInputRef.current) {
      return;
    }
    imageInputRef.current.click();
    console.log('imageInputRef.current', imageInputRef.current);
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  return (
    <>
      <article css={articleStyle}>
        <form>
          <section>
            <p>채널 선택</p>
          </section>
          <section className="relative">
            <input css={titleInputStyle} placeholder="제목을 입력해주세요." />
            <section css={sectionStyle}>
              <input
                ref={imageInputRef}
                onChange={handleImageFilesChange}
                css={imageInputStyle}
                type="file"
                accept="image/*"
              />
              {image ? (
                <div ref={elementRef} className="w-full">
                  <div css={imageContainerStyle}>
                    <img css={imageStyle} src={image} alt="이미지 미리보기" />
                    <button
                      onClick={handleImageRemove}
                      type="button"
                      css={imageButtonStyle}>
                      이미지 삭제
                    </button>
                  </div>
                </div>
              ) : (
                <div onClick={handleImageInputClick} css={addImageStyle}>
                  <span className="text-[0.875rem] text-gray-400">
                    이미지 추가
                  </span>
                </div>
              )}
            </section>
            <textarea
              name="content"
              placeholder="내용을 작성해보세요."
              css={reviewTextStyle}
            />
            <button css={createButtonStyle}>등록</button>
          </section>
        </form>
      </article>
    </>
  );
}

const articleStyle = css`
  position: relative;
  background-color: #f3f4f6; /* bg-gray-100 */
  padding: 1.25rem; /* p-5 */
`;

const titleInputStyle = css`
  width: 100%; /* w-full */
  border-width: 0.5px; /* border-0.5 */
  border-color: #4b5563; /* border-gray-600 */
  margin-bottom: 1.25rem; /* mb-5 */
`;

const imageInputStyle = css`
  display: none;
  border: 1.5px solid gray;
`;

const imageContainerStyle = css`
  position: relative;
  aspect-ratio: 5 / 3;
  width: 100%;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 1rem;
  border: 1.5px solid gray;
  background: white;
`;

const imageStyle = css`
  aspect-ratio: 5 / 3;
  width: 100%;
  object-fit: cover;
`;

const imageButtonStyle = css`
  position: absolute;
  bottom: 1px;
  right: 1px;
  height: 12px;
  width: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: white;
`;

const addImageStyle = css`
  display: flex;
  aspect-ratio: 5 / 3;
  width: 100%;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.3125rem;
  border: 1.5px solid gray;
  background: white;
`;

const reviewTextStyle = css`
  width: 100%;
  resize: none;
  background: white;
  padding-bottom: 0.56rem;
  padding-left: 1.5rem;
  padding-top: 0.5rem;
  font-size: 0.8125rem;
  color: #4b5563;
  outline: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: gray;
  }
`;

const createButtonStyle = css`
  position: fixed;
  bottom: 2rem;
  right: 1.5rem;
  height: 2.5rem;
  width: 4rem;
  transition: none;
  opacity: 1;

  &:disabled {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    right: 50%;
    transform: translateX(22.5rem);
  }
`;

const sectionStyle = css`
  margin-bottom: 1.63rem; /* mb-[1.63rem] */
  display: flex; /* flex */
  gap: 0.81rem; /* gap-[0.81rem] */
  overflow: auto; /* overflow-auto */
  white-space: nowrap; /* whitespace-nowrap */
`;
