import { useState } from 'react';
import { TOPIC_DRAWING, TOPICS, VIDEOS } from '../content';
import ImageSlot from '../components/ImageSlot';

export default function Videos({ t, lang }) {
  const [filter, setFilter] = useState('all');
  const filters = ['all', ...Object.keys(TOPICS)];
  const videos = VIDEOS.filter((v) => filter === 'all' || v.topic === filter);

  return (
    <div className="page page-wide fade-in">
      <div className="page-head" style={{ marginBottom: 36, maxWidth: 'none' }}>
        <div className="kicker">{t.soonKicker}</div>
        <h1 className="h1">{t.videosTitle}</h1>
        <p className="lead" style={{ maxWidth: 640 }}>{t.videosSoon}</p>
      </div>
      <div role="tablist" className="filters">
        {filters.map((k) => (
          <button key={k} role="tab" className="filter" aria-selected={filter === k} onClick={() => setFilter(k)}>
            {k === 'all' ? t.all : TOPICS[k][lang]}
          </button>
        ))}
      </div>
      <div className="video-grid">
        {videos.map((v) => (
          <div key={v.id} className="video-card">
            <div className="video-thumb">
              <ImageSlot id={`video-${v.id}`} className="fill rounded" alt={v.title[lang]} placeholder="Miniatura del vídeo" drawing={TOPIC_DRAWING[v.topic]} />
              <div className="soon-badge">{t.soonBadge}</div>
            </div>
            <div className="kicker" style={{ fontSize: 11, letterSpacing: '.22em' }}>{TOPICS[v.topic][lang]}</div>
            <div className="video-title">{v.title[lang]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
