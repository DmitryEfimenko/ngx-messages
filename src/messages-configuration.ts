
export interface IMessagesConfiguration {
  showErrorsOnlyIfInputDirty: boolean;
}

export class MessagesConfiguration implements IMessagesConfiguration {
  showErrorsOnlyIfInputDirty = true;
}