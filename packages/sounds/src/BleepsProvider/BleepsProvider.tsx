import React, { FC, useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  BleepsAudioSettings,
  BleepsPlayersSettings,
  BleepsSetup
} from '../constants';
import { BleepsContext } from '../BleepsContext';

interface BleepsProviderProps {
  audio?: BleepsAudioSettings
  players?: BleepsPlayersSettings
  children?: any
}

const BleepsProvider: FC<BleepsProviderProps> = props => {
  const bleepsSetup: BleepsSetup = useMemo(() => {
    return {
      audioSettings: {},
      playersSettings: {},
      players: {}
    };
  }, []);

  return (
    <BleepsContext.Provider value={bleepsSetup}>
      {props.children}
    </BleepsContext.Provider>
  );
};

BleepsProvider.propTypes = {
  audio: PropTypes.any,
  players: PropTypes.any,
  children: PropTypes.any
};

export { BleepsProviderProps, BleepsProvider };
