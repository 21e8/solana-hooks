const { useConnection } = require("@solana/wallet-adapter-react");

const useBalance = (publicKey, commitmentOrConfig) => {
  const { connection } = useConnection();
  const [balance, setBalance] = useState();
  useEffect(() => {
    if (!publicKey) {
      setBalance(null);
      return;
    }
    connection.getBalance(publicKey, commitmentOrConfig).then((balance) => {
      setBalance(balance);
    });
  }, [connection, publicKey]);
  return balance;
};

const useTokenSupply = (mint, commitment) => {
  const { connection } = useConnection();
  const [supply, setSupply] = useState();
  useEffect(() => {
    connection.getTokenSupply(mint, commitment).then((supply) => {
      setSupply(supply);
    });
  }, [connection, mint]);
  return supply;
};

module.exports = {
  useBalance,
  useTokenSupply,
};
