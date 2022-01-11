export interface IChatProps {
  msgRef: LegacyRef<HTMLDivElement> | undefined;
  onClickToChatRoom: MouseEventHandler<HTMLDivElement> | undefined;
  messages: any;
}
