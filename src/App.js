import React, { useState } from 'react';
import './App.css';
import { lck2026Data } from './lckData'; 

function App() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [hoveredPlayer, setHoveredPlayer] = useState(null);

  const handleTeamClick = (teamId) => {
    // 같은 팀을 다시 누르면 아무 동작 안 함
    if (selectedTeam === teamId) return; 
    setSelectedTeam(teamId);
    setHoveredPlayer(null); // 팀이 변경되면 하단 프로필 초기화
  };

  return (
    <div className="lck-container">
      <header className="header">
        <div className="title-container">
          <img src="images/lck-logo.svg" alt="LCK Logo" className="lck-main-logo" />
          <h1>2026 LCK Team & Player Archive</h1>
        </div>
      </header>
      
      {/* 1. 상단: 팀 목록 (가로 1열) */}
      {/* App.js의 팀 목록 렌더링 부분 */}
      <div className="team-row">
        {Object.keys(lck2026Data).map((teamId) => (
          <div 
            key={teamId} 
            className={`team-item ${selectedTeam === teamId ? 'active' : ''}`}
            onClick={() => handleTeamClick(teamId)}
          >
            <div className="team-logo">
              {/* 확장자를 .png에서 .svg로 변경 */}
              <img src={`/images/teams/${teamId}.svg`} alt={teamId} className="logo-img" />
            </div> 
            <div className="team-name">{lck2026Data[teamId].fullName}</div>
          </div>
        ))}
      </div>

      <hr className="divider" />

      {/* 2. 하단: 선택된 팀의 선수 목록 및 프로필 */}
      {selectedTeam && (
        <div className="roster-section">
          
          {/* 선수 사진 가로 1열 */}
          <div className="player-row">
            {lck2026Data[selectedTeam].players.map((player) => (
              <div 
                key={player.id} 
                className="player-item"
                onMouseEnter={() => setHoveredPlayer(player)}
                onMouseLeave={() => setHoveredPlayer(null)}
              >
                {/* 🚀 이 부분의 내부를 수정합니다 */}
                <div className="player-photo">
                  <img 
                    src={`/images/players/${player.id}.webp`} 
                    alt={player.name} 
                    className="photo-img" 
                  />
                  {/* 만약 사진 위에 포지션 텍스트를 같이 띄우고 싶다면 아래 줄은 남겨두셔도 됩니다 */}
                  {/* <span className="role-icon">{player.role}</span> */}
                </div>
                
                <div className="player-name">{player.name}</div>
              </div>
            ))}
          </div>

          {/* 호버된 선수의 상세 프로필 표시 영역 */}
          <div className={`profile-display ${hoveredPlayer ? 'visible' : ''}`}>
            {hoveredPlayer ? (
              <div className="profile-content">
                <h3>{hoveredPlayer.name} <span>({hoveredPlayer.role})</span></h3>
                <div className="stats-grid">
                  <p><strong>시그니처 픽:</strong> {hoveredPlayer.mainChamp}</p>
                  <p><strong>KDA:</strong> {hoveredPlayer.kda}</p>
                  <p><strong>킬 관여율(KP):</strong> {hoveredPlayer.kp}</p>
                  <p><strong>15분 골드 격차:</strong> {hoveredPlayer.gd15 > 0 ? `+${hoveredPlayer.gd15}` : hoveredPlayer.gd15}</p>
                  <p><strong>분당 데미지(DPM):</strong> {hoveredPlayer.dpm}</p>
                </div>
              </div>
            ) : (
              <div className="profile-placeholder">
                선수 사진에 마우스를 올리면 상세 정보가 표시됩니다.
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
}

export default App;