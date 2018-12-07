import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { hidePrivacyPolicy } from './actions/initialization'

class PrivacyPolicy extends PureComponent {
  render() {
    const { hidePrivacyPolicy, privacyPolicyVisible, parentRef } = this.props
    return (
      <Dialog
        open={privacyPolicyVisible}
        onClose={hidePrivacyPolicy}
        aria-labelledby="privacy-policy"
        container={parentRef}
      >
        <DialogTitle>Privacy Statement</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please do not enter any personally identifiable information such as
            SSN, Date of Birth, Case Number or last name.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={hidePrivacyPolicy} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

const mapStateToProps = state => {
  return {
    privacyPolicyVisible: state.config.privacyPolicyVisible,
  }
}

const mapDispatchToProps = {
  hidePrivacyPolicy,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivacyPolicy)
