 (
  <div>
    <h1>Businesses</h1>

    {businesses.map((biz) => (
      <div key={biz.id}>
        {biz.name}
      </div>
    ))}

  </div>
);