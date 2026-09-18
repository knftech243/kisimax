$vpsHost = "root@187.124.115.83"
$keyPath = "$env:USERPROFILE\.ssh\kisimax_vps"

Write-Host "Ouverture du tunnel SSH -> Postgres dev sur le VPS (Ctrl+C pour fermer)"
ssh -i $keyPath -N -L 5432:127.0.0.1:5432 $vpsHost
