$ListenAddress = "127.0.0.1"
$Port = 18080
$PacFile = Join-Path $PSScriptRoot "pac.pac"

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://${ListenAddress}:${Port}/")
$listener.Start()

try {
    while ($listener.IsListening) {
        $ctx = $listener.GetContext()
        $res = $ctx.Response
        
        $bytes = [IO.File]::ReadAllBytes($PacFile)
        $res.ContentType = "application/x-ns-proxy-autoconfig"
        $res.ContentLength64 = $bytes.Length
        $res.OutputStream.Write($bytes, 0, $bytes.Length)
        
        $res.Close()
    }
} finally {
    $listener.Stop()
    $listener.Close()
}