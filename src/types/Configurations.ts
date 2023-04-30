import { CONFIGS } from '../constants/configs.constant';

export type Configurations = {
	defaultVSCodeOnlineEnvironment: keyof (typeof CONFIGS)['defaultVSCodeOnlineEnvironment'];
};
