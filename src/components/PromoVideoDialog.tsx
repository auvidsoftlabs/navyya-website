import { useEffect, useRef } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import promoVideo from "../assets/promo.mp4";

type PromoVideoDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  shouldAutoplay: boolean;
};

export function PromoVideoDialog({
  open,
  onOpenChange,
  shouldAutoplay,
}: PromoVideoDialogProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (open) {
      const playVideo = () => {
        video.currentTime = 0;
        if (shouldAutoplay) {
          video.muted = true;
          video
            .play()
            .then(() => {
              // allow user to unmute after autoplay
              video.muted = false;
            })
            .catch(() => {
              // autoplay blocked; keep controls so user can play manually
            });
        }
      };

      const timer = window.setTimeout(playVideo, 100);
      return () => window.clearTimeout(timer);
    }

    video.pause();
  }, [open, shouldAutoplay]);

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

