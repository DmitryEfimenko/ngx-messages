
export interface IMessagesConfiguration {
  showErrorsOnlyIfInputDirty?: boolean;
  showErrorsWhenFormSubmitted?: boolean;
}

export class MessagesConfiguration implements IMessagesConfiguration {
  showErrorsOnlyIfInputDirty ? = true;
  showErrorsWhenFormSubmitted ? = false;
}
