/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiSmallButtonEmpty, EuiSmallButton } from "@elastic/eui";

interface FlyoutFooterProps {
  edit: boolean;
  action: string;
  disabledAction?: boolean;
  onClickCancel: () => void;
  onClickAction: () => void;
  save?: boolean;
  restore?: boolean;
  text?: string;
  useNewUx?: boolean;
}

const FlyoutFooter = ({
  edit,
  action,
  disabledAction = false,
  onClickCancel,
  onClickAction,
  save,
  restore,
  text,
  useNewUx,
}: FlyoutFooterProps) => (
  <EuiFlexGroup justifyContent="flexEnd">
    <EuiFlexItem grow={false}>
      <EuiSmallButtonEmpty onClick={onClickCancel} flush="left" data-test-subj="flyout-footer-cancel-button">
        Cancel
      </EuiSmallButtonEmpty>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiSmallButton disabled={disabledAction} onClick={onClickAction} fill data-test-subj="flyout-footer-action-button">
        {text ? text : restore ? "Restore snapshot" : !save ? `${edit ? "Edit" : "Add"} ${action}` : save ? "Save" : "Create"}
      </EuiSmallButton>
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default FlyoutFooter;
