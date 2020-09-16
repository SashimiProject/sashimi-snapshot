import { mapState } from 'vuex';
import numeral from 'numeral';
import prettyMs from 'pretty-ms';
import store from '@/store';
import config from '@/helpers/config';
import { shorten, etherscanLink } from '@/helpers/utils';

// @ts-ignore
const modules = Object.entries(store.state).map(module => module[0]);

export default {
  data() {
    return {
      config
    };
  },
  computed: {
    ...mapState(modules)
  },
  methods: {
    _ms(number) {
      const diff = number * 1e3 - new Date().getTime();
      return prettyMs(diff);
    },
    _numeral(number, format = '(0.[00]a)') {
      return numeral(number).format(format);
    },
    _shorten(str: string, key: string): string {
      if (key === 'symbol')
        return str.length > 7 ? `${str.slice(0, 7).trim()}...` : str;
      if (key === 'name')
        return str.length > 64 ? `${str.slice(0, 64).trim()}...` : str;
      return shorten(str);
    },
    _ipfsUrl(ipfsHash: string): string {
      return `https://${process.env.VUE_APP_IPFS_NODE}/ipfs/${ipfsHash}`;
    },
    _etherscanLink(str: string, type: string): string {
      return etherscanLink(str, type);
    },
    _padLeft(str, base = 10, chr = '0'){
      const len = (String(base || 10).length - String(str).length) + 1;
      return len > 0 ? `${new Array(len).join(chr || '0')}${str}` : str;
    },
    _formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return `${[
        this._padLeft(date.getFullYear()),
        this._padLeft(date.getMonth() + 1),
        this._padLeft(date.getDate())].join('/')} ${[
        this._padLeft(date.getHours()),
        this._padLeft(date.getMinutes())
      ].join(':')}`;
    }
  }
};
