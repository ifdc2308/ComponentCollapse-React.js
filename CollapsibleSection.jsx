//uso do componente na View   

<CollapsibleSection title="Retenção do INSS">
                <INSSSection
                  initialValues={NfseInitialValues}
                  onChange={handleChangeNfseValues}
                  handleChangeNfseValues={handleChangeNfseValues}
                  formatCurrencyToBrazilian={formatCurrencyToBrazilian}
                  formatPercentage={formatPercentage}
                  serviceClassification={serviceClassificationOptions}
                />
              </CollapsibleSection>

//dentro do componente:

import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { SectionTitle } from './styles';

export const CollapsibleSection = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };

  return (
    <>
      <h5 className="col-1_5" onClick={handleToggleCollapse}>
        {title}
        {isCollapsed ? (
          <ExpandMoreIcon style={{ cursor: 'pointer' }} />
        ) : (
          <ExpandLessIcon style={{ cursor: 'pointer' }} />
        )}
        <SectionTitle />
      </h5>
      {!isCollapsed && children}
    </>
  );
};

//style.js do componente:

import styled from 'styled-components';

export const SectionTitle = styled.h5`
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #ccc; /* Cor da linha */
    bottom: -8px; /* Ajuste para a posição vertical da linha */
    left: 0;
  }
`;



//
