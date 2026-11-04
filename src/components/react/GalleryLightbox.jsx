import { useEffect, useId, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

/**
 * Visor reutilizable. El contenido hijo es la grilla (se ve sin JavaScript).
 * Cada miniatura es un botón con data-lightbox-index.
 * images: [{ src, alt, width, height }]
 */
export default function GalleryLightbox({ images = [], children }) {
  const rootRef = useRef(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const touchRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const captionId = useId();
  const total = images.length;
  const current = images[index] ?? null;

  const go = (delta) => {
    if (total < 2) return;
    setIndex((value) => (value + delta + total) % total);
  };

  const openAt = (event) => {
    const button = event.target.closest?.('[data-lightbox-index]');
    if (!button || !images.length) return;
    const next = Number(button.getAttribute('data-lightbox-index'));
    if (!Number.isInteger(next) || next < 0 || next >= images.length) return;
    triggerRef.current = button;
    setIndex(next);
    setOpen(true);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    const onClose = () => {
      setOpen(false);
      const trigger = triggerRef.current;
      requestAnimationFrame(() => trigger?.focus());
    };

    dialog.addEventListener('close', onClose);
    return () => dialog.removeEventListener('close', onClose);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();
    dialog.querySelector('[data-lightbox-close]')?.focus();
    return () => {
      root.style.overflow = previousOverflow;
    };
  }, [open]);

  const close = () => {
    dialogRef.current?.close();
  };

  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      go(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      go(-1);
    }
  };

  const onTouchStart = (event) => {
    touchRef.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event) => {
    if (touchRef.current == null) return;
    const end = event.changedTouches[0]?.clientX ?? touchRef.current;
    const delta = end - touchRef.current;
    touchRef.current = null;
    if (Math.abs(delta) < 48) return;
    go(delta < 0 ? 1 : -1);
  };

  return (
    <div ref={rootRef} onClick={openAt}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby={current ? captionId : undefined}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-violet-dark/95 p-4 text-white backdrop:bg-violet-dark/95 open:flex open:flex-col md:p-8"
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {current && (
          <>
            <div className="flex justify-end">
              <button
                type="button"
                data-lightbox-close
                className="inline-flex size-12 items-center justify-center rounded-full text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white"
                aria-label="Cerrar"
                onClick={close}
              >
                <X size={28} aria-hidden="true" />
              </button>
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center gap-2 sm:gap-4">
              {total > 1 && (
                <button
                  type="button"
                  className="inline-flex size-12 shrink-0 items-center justify-center rounded-full text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white"
                  aria-label="Foto anterior"
                  onClick={() => go(-1)}
                >
                  <ChevronLeft size={32} aria-hidden="true" />
                </button>
              )}
              <img
                src={current.src}
                alt=""
                width={current.width || undefined}
                height={current.height || undefined}
                className="max-h-[min(68dvh,760px)] w-auto max-w-[calc(100%-7rem)] object-contain"
              />
              {total > 1 && (
                <button
                  type="button"
                  className="inline-flex size-12 shrink-0 items-center justify-center rounded-full text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white"
                  aria-label="Foto siguiente"
                  onClick={() => go(1)}
                >
                  <ChevronRight size={32} aria-hidden="true" />
                </button>
              )}
            </div>
            <div className="mx-auto mt-4 max-w-3xl text-center" aria-live="polite">
              <p id={captionId} className="text-lg leading-relaxed text-white">
                {current.alt}
              </p>
              <p className="mt-2 text-lg text-white">
                {index + 1} de {total}
              </p>
            </div>
          </>
        )}
      </dialog>
    </div>
  );
}
