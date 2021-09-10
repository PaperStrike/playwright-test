import type { RunnerOptions } from '../src/types'

const testConfig: Partial<RunnerOptions> = {
  beforeTests: async () => {
    console.log('.ts config parsed')
  }
};

export default testConfig;
