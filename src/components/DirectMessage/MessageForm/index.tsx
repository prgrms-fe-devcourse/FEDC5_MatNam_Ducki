import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import HookFormInput from '@/components/Common/HookFormInput';
import SendMessageIcon from '@/components/Common/Icons/SendMessageIcon';
import { useCreateMessage } from '@/hooks/useConversation';

import {
  BottomGradient,
  inputStyle,
  MessageFormWrapper,
  MessageInputWrapper,
  MessageSendButton,
} from './style';

interface MessageValues {
  message: string;
}

interface MessageFormProps {
  onRefetchMessages: () => void;
}

export default function MessageForm({ onRefetchMessages }: MessageFormProps) {
  const { userId } = useParams();

  if (!userId) return;

  const { register, handleSubmit, resetField, setFocus } =
    useForm<MessageValues>();

  const { mutateAsync } = useCreateMessage();

  const handleResetValue = () => {
    resetField('message');
    setFocus('message');
  };

  const onSubmit: SubmitHandler<MessageValues> = async ({ message }) => {
    if (!message.trim()) return;

    await mutateAsync({ message, receiver: userId });

    onRefetchMessages();
    handleResetValue();
  };

  return (
    <MessageFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <BottomGradient />
      <MessageInputWrapper>
        <HookFormInput
          name="message"
          register={register}
          placeholder="메세지 보내기"
          css={inputStyle}
        />
        <MessageSendButton>
          <SendMessageIcon />
        </MessageSendButton>
      </MessageInputWrapper>
    </MessageFormWrapper>
  );
}
