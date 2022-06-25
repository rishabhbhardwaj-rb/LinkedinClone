import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import {selectUser} from './features/userSlice.js'

import './Sidebar.css'
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUVFxUXGBcXFxcXFxcYFxUXFxUYGBUYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADEQAAIBAwMCBAQHAQEBAQAAAAABAgMRIQQxQRJRBRNhcYGRsfAUIjKhwdHh8UJiBv/EABsBAAMBAQEBAQAAAAAAAAAAAAIDBAEABQYH/8QAJBEAAgICAwADAAIDAAAAAAAAAAECEQMhBBIxE0FRImEUcYH/2gAMAwEAAhEDEQA/APTJEE6VeTf5l8UGsW0fOhgFTk5MXqywakcraBypZv8AsAnKxWWocXl4K1aya4YyjiVaqxbje/cVdXs9uO5Xrs7O69yKkpGs6KC0dYkndZ/YYo14y2w+xmqlncL5V3h5XzX3kTOMWU47NKVJ7lWvnx6AtJUezz2Y7034JJa0WQv1DPh/isoO0/zR78nqdLXUleLun2PFukF0eonSd47crhnnZ+JGW4aZ6eHmS8ybPcJCtait18gWh16mrrD7DKq3dmrep5bxtNpnoRdbQmitWpbZX+gzViviKSiB0a2UwaZk6+mpbrPpx8TL8vp/VfH6e177eh6WpQuKVdImrNBJno4s6SowFN3usdvT0R2DHq1KUE44s3cS6Tm0WxkpKwkIrl224vfuNavy1by5X7isVd4+7lquncXZrdXWb49xT3pgPclv/gXzLBYTTFtwkCacPsFouyF4ojj2E2ZYMrUQRxONBxdM1MXZWUAs4HFEsjJLwapC7iVaGfLuW8gpjO0F8iEyBZU3fY4HYfZD9NhHMDGqVrS7H1dH5BQTzE/cXrZ27GfPVq7V/Y5PWXxyGomdSTqJ4f37iylx8f8AhWq/Maiv1MWp1MuMt07BoLprY1O83dvK2Zfqt+X9wdON/wBPy/obo0OrHIEppG/G7OQp+gxDR82u/u2BzR6Z2s1/po6PTcPBBmzJeFmHH+mTHQXtbY1tPQi10SdpLZ9/Rr+R2Gja+/3KOhfP2iCeftqz0I4eqtGZVouLs/oV8rBtTp9atLfuITpOLs0/v+Do5r/2F8N+C9NOLTRu6TVKas8P9n7GfRSePgyVaEqb6lsJzJT/ANlODtjdPw0vOafTLbhlKrz/ACdozVSCbW6v6oXu4Ppl+l7PsSJbpnpxVjUJqXuclD5CksPAxSr3BlAOq8AazTpp2+Bg1qdnk9PIxfFKNncTOP2V8bJvqzPTLym3ltsoi6QplrKoJTB3CwYuctGMMiyB3CRaJJCmSUCjiGRycDozXjMUgLRxQCqJK0d0s25KYMLt9AL5D9PIOKvgbpUMJNp4urfQpg6Z05JCzicHPwj7EKLA+SP6eS0fiSxnDHp6jFzxdPUWNCjr7x6WfbSxn5p0GPE556lhoBHVYtL9SSa+K2AV9S3hiXXn0CS0HDHJbNL8U7qSbTRyrV6svfN3fLbfP+Cfm32wdUnwLfp6EeNa0bXhtNyeJWsnLONrc/exu6CrCbiniW11y74v6nmvDqzz64f32NnTUvyuSaxZ+rzsiHPLex0OJqqPY0NPhJ78Mdp0b8ZMLwbxW9oVH7N8HobnhciUoS2WYuOmqYRUharp7ZWw3Sq8MLKNyXuxqh0dGZJYuk2+y/05VpqS2zt/GfQLqaayn8u4jUquLuNjKx8cKfgCLUHa1v7GaFfaEmnjL2zx+XNk888cmf4jU6l1LdGdHxK3F21bjNr2Q3q2i6HF7xPQRq9Dstm8fUNN9V1K1rK3e/LMCl4piz/uzHqeovfK4XN/XcFwfoL48sZK0+l9D3W3sLS1Vn7C+srN4atbZ/6JOq37eg9Y7WyqGK1s9FQ1alm/pYvXSlH4HmY1LPfKNOjq7pO9rboVPAZLC4u0LVVZ9iinYa11O6ujNlIj+OyuD7IcUS8OwvTqB4sjyRrRrCJFoo5FnURti2EgGggMEGghE3TFSB1ogbDnSBlTGY836bGQvF2ZtUNNezQhQpXedjd0tJRVt7fTgtwzsRyctLXpZexwIQp7EFnwMtF/A4XpRu87H6C2eAoRbs5KVypadr4OKINjVjRIuwzTqO2Hh2v8NrizRaDsDJWOxvppmz4bSv8A+krKUrSdo2SWz5b7W4NTTTxdcmFo8mrpMPp7/Uhyx3s9TBTVmjGZ6Xw3xGTh0vdbPmx5/T0eWaWlxjk8/PjTQ/4l6acdc0Ow8SwY8gfUQvFFhvDGRranXxe4nVqX2dxOaXcX6mtmbHEl4HDCl4FrzMHXYldbM2Ks7mZrIYKcSoswPqxPzX3HKOobXt9oz2EoTs/cf1RVONo03Xbw8i8J9L3x3OdRWrHqVmYooSkl6XqyydjXBOW3pg5cFxDpUa2lr3ja4rW3F9PV6XcPXknlE2TD/LQKXVgnN3VjQ08+DNUhuhNL3I+VhuPgUjQTLpAqc01cuqqPEnjlYlhYsNBiimximrk2TG4+i5IahELChdlaK4Y1CLW5kI2SzlQN6f0CwfTZ/MbppSXqDnAqUXHaJ/kvTOpkE3S7Mgz5X+HdF+nxpUr/ALf59+pacrKyuXqyTt/wFZn6YeFGBzo+hEXOJegIxKiqiXjC5aK/6dhEwKhjSQ6ZYNvTrkx9E85+BpU63T7k+VWehxvL+jdpTDwnYyaFZvZ5GVWl2uQygz1YRUlo0lXCKaZkfiPgdhqiWWKhnwmtUirGfKVsP4Mr+KbxcpOonhi/A4YmvQbrXwxeU73TB1GwU5crcphEb0F6jycTO1FkiiOofehqNTYv1CsCddjHEW4jMivBWMywLRhC/XixRnAGjTtwlOZRQJN8IBpP030Zjq7Map177GKmanhrurMg5eGMIdkjJRSRo0W2P6WNmK0HZjMJWdz5nkZf5V9EmT8NKMLjEOzFaVS6uhmEgoNHnzTCJOLuMTSewGEr4ZSb6R90v6ENW/7LumiAOsgPdfgXV/p8W5OpIB1lvMP00knjp2g0oo47EpyuSa+0YA4WrR2WDsJWj63BWI1wcAtDdN7u/wDoSFe7+/qK5it9+CKQPXZTCVRSRu6PU5saVSdjzGkrWZq6fVdybLCto9biq42h1zXJWcPUDKfcqqyEOmegoteFuuxZ1X3AVpXQJT7E8sP4NQerUuCXdlp/foDlkbGNIz0jnf2RxSKyTIGbRa51FLnbmHF1PJbzARHcyjqGIzReDyJxkHhIBxMaGr39S6ogKbyN0WQ8iTj4A9AKunuG0LccWDeWRUyKWbvDrIztqjSg7jEWIUW0O0mfP8jDXhPNDdF2GY1BGLsFhIXgTckiacR2WosVlrE+Pn7f2KNb/f3wBsPz9o0l9gRxRZoKv/8AVviyCvX2RAvj/s740fH7EDSplHE/TrESxWdpsbavZ/BicUOaeXAMgfgcWUjRuyTpqPqO14pJNAGri+5n+M2hJ7loMLKkV8thqaZmPiyboJCIzTmCoq4bowKnL9PZ4uFwQaFct1MWQWmxE4/aLqCxZWLIcsLBL9bZfqBRZ1s5mUXsVO7nALOIkdSKs7cKzixy5y5LnHFki6B3sdUgZIyg6maFF9SMmLGNNWs0ScnD3jr0Fo16ZZwK032LpngTtMSw9KPcZpxA04jKZOv5X/QmbCSiXgisGFiVcXhpz7k8pao4ivl9uS9jhfPiRYCkUaIESXZv4kPPcGnVBdj5vr9D0yfYRqUWesr0epZRnVdMldH2OHkWir402Yvk9yWt8zU8vj79hevR+X8lCyJhvDdFadTFmsHHTfYpGm/YYpPvsBLXhRi4+rZTy7+5V0bDbplZK5OsmzViinYCNILA7E6jZTsY19lXS5OqAaMcXIhLyNGdgdjvQH6QMlYGOVS0YVOMsVYyziyC9CYAvCbFzTe0cdcbYJCKbsgkIPdrDI6eTF4ZaK1F2RSUGNU6LvfsWnC+BfdozshHpOJjMqQoxkJ9gk7GKSLKFmU0082fI95QfUCToJoJ8P4GjAzqSatjk0aex4/O438riJmxmDQSLF4MLE83FhfyJvxiZDVNjEBSlIPGR7fGw9USzCsqS5CqUADvV6HShCejqPP1MClanc1KtNW2yKukBxs6ej0oyRl1NM2Celvz8zYdM7DT5PTjO9Mcs1IwpaCfb1+BR0Wt1Y9THS3wUnouOTpTZq5f6efodvkSrSsa1TSLtn7yT8HdfUinNxlaOeZemJYijyzYfhL3VhfVeHSjumvp8x8Z2rM+aLdWZ7lc7GQSenfBWNN9jmrGWg8GmjkzkLl1TI545RdoG0Kygc6GPaeldh3QGY8/0zHOjJcX2ZE7M3aWlTWRLV+GSWVkpTBjli3TDaak5pdNnf4DFbQNeoj4fWdOSvs9/Q9ZT0yqxs+c4MaJs2R45f0edo0mpW+QSrS7b2NatorY2OOh8xTQHzp7MCpAz9TS5N/W6e2Vs/qITopmqLT0U48i9MeJveHLH5t+BKhole74+o/DBWlo3LNPSGJwyWhFvv8ADB2jJP3G4U0gZQUiVyoBWpRdm3bOOA8YloWfZ/uEiid8dWA56KWsGWSOBIOzKIxSFN2FidOpFkjWhdlbHSXIDRwGt4XLizFVo5ZvFnqHEHOifOxx9XaZ0eVL7PNfhWvVBKdA1tTS7WEI1lysnpYuQvJDVklJaO06di9WhdFo1UMU0VOYpya2Zc9PfPKO09NZ8O29uxp1tPyuASpcgNphLLaBSoRSTSx/YxTopqzQbTxj+lrfbsu4enQtj5GxVE88hiV/Co3vb79wFXwHq2w/r8T00aN+AlClZjUZ/lTj4zwGp8InDdNeoGFBrc+lV9JGaMTU+DrjD/Y5opxc/tqR5qhRXccjpLjMtB08W9vvIajBpbJr7/cS8SbGSzXtMSp0Lbo7OlwaaoJr0/dFI0M9L+A1IX8pjVNIpXXJo/8A5+/5obO1ovsNVNFhvsE0Ontaff8AgJGZMylBobqaJ9C6neS3f2hF0fmj0NNKS2A1fD//AEvkc42Qxz1pnnq+nummtzz9SnZ25PZ16NjF8V0tmpLnD9+A1Eu4+fdGXXiun2KUaV8hYxLpWwGiq9FFBRafK+o5RqXE9Symnk27IKjGrVmrRgksKxenkFTnxyG2BaEs6VZaHfkFdttWt2f9GGIZpvBZsX6shYywcwWi6RDmDphhq06itjJ2Enzbf9uAS1EMZSvmxKtWyVs3dtzwU4+k/W/ok2m+l7tXEa+lz6/U0mDlJZ5atf0v3CcV9hwk14IU9I73HaVBNDOlV91b+PcM6S3WH2K8T0BPK2wDp2SzsVpW/wACTVyvlpDK2LvQf8rVmNU4Rl/gjEPBcjoiZoe8hcAvIZ2nqHyHjUD0TtyQGEbbolSipIZwRxRxnYyKuiezWBOrobO6Z6TpKypJ7oyhseQ0YNLS/wDf7D/gPQ0vwqWwSELGnPO/oy6enwFp6JJWHZU0dsaY8rFdPTs7cDEy1SNkAdZW9ggL7OxGussytTBOMo/foaGorIy9RXyw0i7EmYcvv+SUJRcle7XodqxXm24ld2ulbGd/USlPhch0erH+SCVZ9Un07Xx7cF+tL8q35BRwguntvyaEx7TQsvUJUm8Y9/QHTZaUgBP2EtgnWAlW9QP4lcZOo5RY2pO7xjgupC8G2FS9QGzmgvWQC5epDOyM6iWwzS1Ekst249/YhD4nHJ+l0knVl6fik1zf3NXQ+LK351a7tdfydIW4c007sTm4+OS8NmNZWuVjVjd235IQ9js7R43RbK1KsQLnbJCDkzlFUCrVbW9dg1PUOxCBXs1xXVF46hcjFKp2IQxSYucEkNxmFhIhBqZJJBUREIELOSRS5CGmojKJ5IQ01F2rmP41Fxi+nn7Zwhq9GYX/ADR5qpr3zmwvWrXOkH0e0opGdr5q17fp/kQhqLO7Xw/06QJF2JLqXr6hZaVl93LaPU3+ZCG1oJxXU1qc8C+r1fSiEAS2TwScjN8+UuRvTI6QJjp6Q3CpYKpkIRZXUhVE6jpCC7Z1H//Z" alt="" />
            <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,443</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("softwareengineering")}
            {recentItem("design")}
            {recentItem("developer")}
            
        </div>
    </div>
  )
}

export default Sidebar