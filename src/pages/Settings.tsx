import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { styled } from '@linaria/react';
import { Feature } from 'flagged';
import { rgba } from 'polished';

import { Card } from 'components/common/Card';
import { Layout } from 'components/common/Layout';
import { WidgetPage } from 'components/common/WidgetPage';
import { Icon, Select, Switch } from 'components/ui';
import { MenuItem } from 'components/ui/Select/MenuItem';
import { clusters } from 'config/constants';
import { FEATURE_SETTINGS_LIST } from 'config/featureFlags';
import { RootState } from 'store/rootReducer';
import { disconnect, STORAGE_KEY_SEED, updateSettings } from 'store/slices/wallet/WalletSlice';
import { appearance, currencies } from 'utils/settings';
import { WalletSettings } from 'utils/types';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 24px;
`;

const RowsWrapper = styled.div`
  margin-top: 10px;
`;

const RowWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  height: 76px;
  margin: 0 10px;
  padding: 6px 0;

  &:not(:last-child) {
    &::after {
      position: absolute;
      right: 10px;
      bottom: 0;
      left: 10px;

      border-bottom: 1px solid ${rgba(0, 0, 0, 0.05)};

      content: '';
    }
  }
`;

const RowIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-right: 20px;

  background: #f6f6f8;
  border-radius: 12px;
`;

const RowIcon = styled(Icon)`
  width: 24px;
  height: 24px;

  color: #a3a5ba;
`;

const CenterWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 64px;
  padding: 0 10px;

  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: #f6f6f8;

    ${RowIconWrapper} {
      background: #fff;
    }

    ${RowIcon} {
      color: #5887ff;
    }
  }
`;

const SecondaryWrapper = styled.div`
  display: flex;
`;

const FieldNameWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  color: #000;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const LogoutCard = styled(Card)`
  padding: 0;
`;

const LogoutIcon = styled(RowIcon)`
  width: 20px;
  height: 20px;

  color: #a3a5ba;
`;

const LogoutWrapper = styled(RowWrapper)`
  cursor: pointer;

  &:hover {
    ${LogoutIcon} {
      color: #f43d3d;
    }
  }
`;

const CurrencyItem = styled.div``;

const Symbol = styled.span`
  padding-left: 3px;

  color: #a3a5ba;
`;

const Capitalize = styled.span`
  text-transform: capitalize;
`;

const Title = styled.div`
  color: #a3a5ba;
  font-weight: 600;
  font-size: 16px;
`;

const ChevronIcon = styled(Icon)`
  width: 16px;
  height: 16px;

  color: #a3a5ba;
`;

const ChevronWrapper = styled.div`
  margin-left: 20px;

  transform: rotate(270deg);
`;

type RowProps = {
  icon: string;
  title: React.ReactNode;
  secondary?: React.ReactNode;
  onClick?: () => void;
};

const Row: FunctionComponent<RowProps> = ({ icon, title, secondary, onClick }) => {
  return (
    <RowWrapper onClick={onClick}>
      <CenterWrapper>
        <FieldNameWrapper>
          <RowIconWrapper>
            <RowIcon name={icon} />
          </RowIconWrapper>
          {title}
        </FieldNameWrapper>
        <SecondaryWrapper>{secondary}</SecondaryWrapper>
      </CenterWrapper>
    </RowWrapper>
  );
};

export const Settings: FunctionComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const settings = useSelector((state: RootState) => state.wallet.settings);

  const handleLogoutClick = () => {
    localStorage.removeItem(STORAGE_KEY_SEED);
    void dispatch(disconnect());
  };

  const onItemClickHandler = (option: Partial<WalletSettings> = settings) => () => {
    dispatch(updateSettings(option));
  };

  const currentCluster = settings.network.current;

  let clusterUrl;
  if (Object.keys(clusters).includes(currentCluster)) {
    clusterUrl = clusters[currentCluster];
  } else {
    clusterUrl = settings.network.custom ? settings.network.custom[currentCluster] : '';
  }

  return (
    <Layout
      rightColumn={
        <Wrapper>
          <WidgetPage icon="gear" title="Settings">
            <RowsWrapper>
              <Feature name={FEATURE_SETTINGS_LIST}>
                <Row icon="reload" title="Backup" />
                <Row
                  icon="currency"
                  title="Currency"
                  secondary={
                    <Select value={settings.currency}>
                      {currencies.map(({ ticker, name, symbol }) => (
                        <MenuItem
                          key={ticker}
                          isSelected={ticker === settings.currency}
                          onItemClick={onItemClickHandler({ currency: ticker })}>
                          <CurrencyItem>
                            {name}
                            <Symbol>{`(${symbol})`}</Symbol>
                          </CurrencyItem>
                        </MenuItem>
                      ))}
                    </Select>
                  }
                />
                <Row icon="card" title="Payment methods" />
                <Row icon="lock" title="Security" />
                <Row
                  icon="sun"
                  title="Appearance"
                  secondary={
                    <Select value={settings.appearance}>
                      {appearance.map((value) => (
                        <MenuItem
                          key={value}
                          isSelected={value === settings.appearance}
                          onItemClick={onItemClickHandler({ appearance: value })}>
                          <Capitalize>{value}</Capitalize>
                        </MenuItem>
                      ))}
                    </Select>
                  }
                />
              </Feature>
              <Row
                icon="branch"
                title="Network"
                secondary={
                  <>
                    <Title>{clusterUrl}</Title>
                    <ChevronWrapper>
                      <ChevronIcon name="chevron" />
                    </ChevronWrapper>
                  </>
                }
                onClick={() => {
                  history.push('/settings/network');
                }}
              />
              <Row
                icon="hide"
                title="Hide zero balances"
                secondary={
                  <Switch
                    checked={settings.isZeroBalancesHidden}
                    onChange={onItemClickHandler({
                      isZeroBalancesHidden: !settings.isZeroBalancesHidden,
                    })}
                  />
                }
              />
              <Row
                icon="free-tx"
                title="Use free transactions"
                secondary={
                  <Switch
                    checked={settings.useFreeTransactions}
                    onChange={onItemClickHandler({
                      useFreeTransactions: !settings.useFreeTransactions,
                    })}
                  />
                }
              />
            </RowsWrapper>
          </WidgetPage>
          <LogoutCard withShadow>
            <LogoutWrapper onClick={handleLogoutClick}>
              <CenterWrapper>
                <FieldNameWrapper>
                  <RowIconWrapper>
                    <LogoutIcon name="logout" />
                  </RowIconWrapper>
                  Logout
                </FieldNameWrapper>
              </CenterWrapper>
            </LogoutWrapper>
          </LogoutCard>
        </Wrapper>
      }
    />
  );
};
