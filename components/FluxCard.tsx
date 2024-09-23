import React from 'react'

export function FluxCard({title}:{title:string}) {
  return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam officiis architecto ducimus reprehenderit natus illo doloremque a voluptas? Deserunt mollitia sapiente accusamus, id autem incidunt. Vel ea doloribus quis consequatur!</p>
        </div>
    </div>
  )
}
