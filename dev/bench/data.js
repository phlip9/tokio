window.BENCHMARK_DATA = {
  "lastUpdate": 1607711748884,
  "repoUrl": "https://github.com/phlip9/tokio",
  "entries": {
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69e62ef89e481e0fb29ce3ef4ddce1eea4114000",
          "message": "sync: make TryAcquireError public (#3250)\n\nThe [`Semaphore::try_acquire`][1] method currently returns a private error type.\r\n\r\n[1]: https://docs.rs/tokio/0.3/tokio/sync/struct.Semaphore.html#method.try_acquire",
          "timestamp": "2020-12-10T19:56:05-08:00",
          "tree_id": "0784747565f6583a726c85dfedcd0527d8373cc6",
          "url": "https://github.com/phlip9/tokio/commit/69e62ef89e481e0fb29ce3ef4ddce1eea4114000"
        },
        "date": 1607711732831,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15438,
            "range": "± 3511",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1095,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 645,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15240,
            "range": "± 3573",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1093,
            "range": "± 13",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69e62ef89e481e0fb29ce3ef4ddce1eea4114000",
          "message": "sync: make TryAcquireError public (#3250)\n\nThe [`Semaphore::try_acquire`][1] method currently returns a private error type.\r\n\r\n[1]: https://docs.rs/tokio/0.3/tokio/sync/struct.Semaphore.html#method.try_acquire",
          "timestamp": "2020-12-10T19:56:05-08:00",
          "tree_id": "0784747565f6583a726c85dfedcd0527d8373cc6",
          "url": "https://github.com/phlip9/tokio/commit/69e62ef89e481e0fb29ce3ef4ddce1eea4114000"
        },
        "date": 1607711738496,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 186607,
            "range": "± 13029",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 709991,
            "range": "± 115933",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4936623,
            "range": "± 801296",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19705517,
            "range": "± 2140775",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69e62ef89e481e0fb29ce3ef4ddce1eea4114000",
          "message": "sync: make TryAcquireError public (#3250)\n\nThe [`Semaphore::try_acquire`][1] method currently returns a private error type.\r\n\r\n[1]: https://docs.rs/tokio/0.3/tokio/sync/struct.Semaphore.html#method.try_acquire",
          "timestamp": "2020-12-10T19:56:05-08:00",
          "tree_id": "0784747565f6583a726c85dfedcd0527d8373cc6",
          "url": "https://github.com/phlip9/tokio/commit/69e62ef89e481e0fb29ce3ef4ddce1eea4114000"
        },
        "date": 1607711741517,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 953,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14235,
            "range": "± 4814",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 990,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14372,
            "range": "± 4546",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 578,
            "range": "± 66",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}