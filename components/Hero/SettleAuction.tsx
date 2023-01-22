import Image from "next/image";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { AuctionABI } from "@buildersdk/sdk";
import {useTheme} from "@/hooks/useTheme";

export const SettleAuction = ({ auction }: { auction?: string }) => {
  const { config } = usePrepareContractWrite({
    address: auction,
    abi: AuctionABI,
    functionName: "settleCurrentAndCreateNewAuction",
    enabled: !!auction,
  });
  const { write, data, isLoading: contractLoading } = useContractWrite(config);
  const { isLoading: transactionLoading } = useWaitForTransaction({
    hash: data?.hash,
  });

  const isLoading = contractLoading || transactionLoading;
  const [theme] = useTheme();

  return (
    <button
      onClick={() => write?.()}
      className="w-full bg-skin-button-accent bg-skin-button-accent hover:bg-skin-button-accent-hover text-skin-inverted h-12 mt-6 rounded-lg flex items-center justify-around"
    >
      {isLoading ? (
        <Image src="/spinner.svg" height={26} width={26} alt="spinner" />
      ) : (
        <span>Settle Auction</span>
      )}
    </button>
  );
};
