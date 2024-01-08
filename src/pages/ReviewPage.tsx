import styled from '@emotion/styled';
import { useState } from 'react';

import ImageUpload from '@/components/Common/ImageUpload';

export default function ReviewPage() {
  const [file, setFile] = useState<File | null>(null);

  const image = file ? URL.createObjectURL(file) : null; // 파일이 있으면 url을 만들어서 image에 넣어줍니다.

  const handleFileChange = (file: File | null) => {
    setFile(file); // 파일이 선택되면 file state를 업데이트
  };
  return (
    <>
      <ReviewContainer>
        <form>
          <section>
            <p>채널 선택</p>
          </section>
          <section className="relative">
            <TitleInput placeholder="제목을 입력해주세요." />
            <ImageUpload image={image} onFileChange={handleFileChange} />
            <ReviewTextArea name="content" placeholder="내용을 작성해보세요." />
            <CreateButton>등록</CreateButton>
          </section>
        </form>
      </ReviewContainer>
    </>
  );
}

const ReviewContainer = styled.article`
  position: relative;
  background-color: #f3f4f6; /* bg-gray-100 */
  padding: 1.25rem; /* p-5 */
`;

const TitleInput = styled.input`
  width: 100%; /* w-full */
  border-width: 0.5px; /* border-0.5 */
  border-color: #4b5563; /* border-gray-600 */
  margin-bottom: 1.25rem; /* mb-5 */
`;

const ReviewTextArea = styled.textarea`
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

const CreateButton = styled.button`
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

const Section = styled.section`
  margin-bottom: 1.63rem; /* mb-[1.63rem] */
  display: flex; /* flex */
  gap: 0.81rem; /* gap-[0.81rem] */
  overflow: auto; /* overflow-auto */
  white-space: nowrap; /* whitespace-nowrap */
`;
