import * as React from "react";

import {
  Button,
  MenuItem,
  IInputGroupProps,
  HTMLInputProps
} from "@blueprintjs/core";
import { Suggest } from "@blueprintjs/select";
import { filmSelectProps, ISelectItem } from "./SuggestSelectItem";

interface IProps {
  items: ISelectItem[];
  onChangeSelection: (item?: ISelectItem) => void;
  inputProps?: IInputGroupProps & HTMLInputProps;
}

export interface ISuggestState {
  closeOnSelect: boolean;
  item?: ISelectItem;
  minimal: boolean;
  openOnKeyDown: boolean;
  resetOnSelect: boolean;
  resetOnQuery: boolean;
}

export class SuggestSelect extends React.PureComponent<IProps, ISuggestState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      closeOnSelect: true,
      item: undefined,
      minimal: true,
      openOnKeyDown: false,
      resetOnQuery: true,
      resetOnSelect: false
    };
  }

  public render() {
    const { item, minimal, ...flags } = this.state;
    const { items, inputProps } = this.props;

    const clearButton =
      item === undefined ? (
        undefined
      ) : (
        <Button icon="cross" minimal={true} onClick={this.onClearSelection} />
      );
    return (
      <Suggest
        {...filmSelectProps}
        {...flags}
        selectedItem={item === undefined ? null : item}
        items={items}
        inputValueRenderer={this.renderInputValue}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={this.handleValueChange}
        popoverProps={{ minimal }}
        inputProps={{ rightElement: clearButton, ...inputProps }}
      />
    );
  }

  private renderInputValue = (item: ISelectItem) => item.firstTitle;
  private handleValueChange = (item: ISelectItem) => {
    this.setState({ item });
    this.props.onChangeSelection(item);
  };
  private onClearSelection = () => {
    this.setState({ item: undefined });
    this.props.onChangeSelection();
  };
}
