import { useEffect, useRef } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import promoVideo from "../assets/promo.mp4";

type PromoVideoDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function PromoVideoDialog({ open, onOpenChange }: PromoVideoDialogProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (open) {
      const playVideo = () => {
        video.currentTime = 0;
        video.muted = false;
        video
          .play()
          .catch(() => {
            // Autoplay might still be blocked; user can press play manually.
          });
      };

      const timer = window.setTimeout(playVideo, 50);
      return () => window.clearTimeout(timer);
    }

    video.pause();
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[94vw] max-w-[720px] p-0 overflow-hidden rounded-[24px]">
        <div className="relative w-full bg-black">
          <video
            ref={videoRef}
            id="promo-video"
            src={promoVideo}
            controls
            playsInline
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

