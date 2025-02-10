import HMSScan from '@hmscore/react-native-hms-scan';

const ScanPlugin = {
  ScanTypes: HMSScan.ScanTypes, // Expose ScanTypes
  Utils: {
    startDefaultView: async (request = { scanType: HMSScan.ScanTypes.All }) => {
      try {
        const result = await HMSScan.ScanUtils.startDefaultView(request);
        console.log('Scan Result:', result);
        return result;
      } catch (error) {
        console.error('Scan Error:', error);
        return null;
      }
    },
  },
};

export default ScanPlugin;
