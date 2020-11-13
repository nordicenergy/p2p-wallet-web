import React, { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import * as web3 from '@solana/web3.js';
import { styled } from 'linaria/react';
import { rgba } from 'polished';

import { Card } from 'components/common/Card';
import { Button, Icon } from 'components/ui';
import { transferTokens } from 'store/actions/complex';
import { RootState } from 'store/types';

import { FromSelectInput } from './FromSelectInput';
import { ToAddressInput } from './ToAddressInput';

const Wrapper = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;

  background: #fcfcfc;
  border: 1px solid ${rgba('#000', 0.1)};
  border-radius: 10px;
  cursor: pointer;
`;

const BackIcon = styled(Icon)`
  width: 15px;
  height: 15px;

  color: #000;
  transform: rotate(90deg);
`;

const Title = styled.div`
  margin-left: 20px;

  color: #000;

  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
`;

const WrapperCard = styled(Card)`
  padding: 0;
  margin-top: 20px;
`;

const FromWrapper = styled.div`
  border-bottom: 1px solid ${rgba('#000', 0.1)};
`;

const ToWrapper = styled.div`
  padding: 16px 32px 32px;

  border-bottom: 1px solid ${rgba('#000', 0.1)};
`;

const ToSelect = styled.div`
  display: flex;
  margin-bottom: 32px;

  > :not(:last-child) {
    margin-right: 10px;
  }
`;

const ToOption = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 20px;

  color: ${rgba('#000', 0.5)};
  font-size: 14px;
  line-height: 17px;

  background: #fafafa;
  border-radius: 10px;

  &.active {
    color: #000;

    background: #e6e6e6;
  }
`;

const ActionWrapper = styled.div`
  padding: 32px;
`;

const Hint = styled.div`
  margin-top: 24px;

  color: ${rgba('#000', 0.5)};
  font-size: 14px;
  line-height: 17px;
`;

type Props = {};

export const SendWidget: FunctionComponent<Props> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [fromTokenPublicKey, setFromTokenPublicKey] = useState('');
  const [fromTokenAmount, setFromTokenAmount] = useState('');
  const [toAddress, setToAddress] = useState('');

  const handleBackClick = () => {
    history.replace('/wallets');
  };

  const handleToAddressChange = (publicKey) => {
    setToAddress(publicKey);
  };

  const handleSubmit = () => {
    const amount = Math.round(Number.parseFloat(fromTokenAmount) * 10 ** 9);

    if (!amount || amount <= 0) {
      throw new Error('Invalid amount');
    }

    dispatch(
      transferTokens({
        sourcePublicKey: new web3.PublicKey(fromTokenPublicKey),
        destPublicKey: new web3.PublicKey(fromTokenPublicKey),
        amount,
      }),
    );
  };

  const handleTokenChange = (nextTokenPublicKey: string) => {
    setFromTokenPublicKey(nextTokenPublicKey);
  };

  const handleAmountChange = (nextTokenAmount: string) => {
    setFromTokenAmount(nextTokenAmount);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <BackWrapper onClick={handleBackClick}>
          <BackIcon name="chevron-1" />
        </BackWrapper>
        <Title>Send tokens</Title>
      </TitleWrapper>
      <WrapperCard>
        <FromWrapper>
          <FromSelectInput
            tokenPublicKey={fromTokenPublicKey}
            tokenAmount={fromTokenAmount}
            onTokenChange={handleTokenChange}
            onAmountChange={handleAmountChange}
          />
        </FromWrapper>
        <ToWrapper>
          <ToSelect>
            {/* <ToOption>To user</ToOption> */}
            <ToOption className="active">To wallet</ToOption>
          </ToSelect>
          <ToAddressInput value={toAddress} onChange={handleToAddressChange} />
        </ToWrapper>
        <ActionWrapper>
          <Button primary big full onClick={handleSubmit}>
            Send
          </Button>
          <Hint>
            Physical space is often conceived in three linear dimensions, although modern physicists
            usually consider it, with time
          </Hint>
        </ActionWrapper>
      </WrapperCard>
    </Wrapper>
  );
};