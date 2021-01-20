window.BENCHMARK_DATA = {
  "lastUpdate": 1611171839577,
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
      },
      {
        "commit": {
          "author": {
            "email": "liaoymxsdl@sina.com",
            "name": "Rust大闸蟹",
            "username": "baoyachi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e42317b072c5240fe190c0a8708cd24bb4a4eb08",
          "message": "chore: remove macro_rules semicolon (#3381)\n\nfix build warning",
          "timestamp": "2021-01-06T15:46:37+09:00",
          "tree_id": "afddb1695c354a4f98712745b23363ef96774bc8",
          "url": "https://github.com/phlip9/tokio/commit/e42317b072c5240fe190c0a8708cd24bb4a4eb08"
        },
        "date": 1609980916786,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16102,
            "range": "± 4563",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1141,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 691,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16563,
            "range": "± 5062",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1140,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "cc0911aa645cbaf5dee5b3d51efcfbe703159902",
          "message": "net: update datagram docs on splitting (#3448)",
          "timestamp": "2021-01-20T16:28:57+01:00",
          "tree_id": "6a9606182d62c927932ebdd5361899a12573b9b5",
          "url": "https://github.com/phlip9/tokio/commit/cc0911aa645cbaf5dee5b3d51efcfbe703159902"
        },
        "date": 1611171838506,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15844,
            "range": "± 4051",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1023,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 628,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15903,
            "range": "± 5693",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1088,
            "range": "± 64",
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
      },
      {
        "commit": {
          "author": {
            "email": "liaoymxsdl@sina.com",
            "name": "Rust大闸蟹",
            "username": "baoyachi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e42317b072c5240fe190c0a8708cd24bb4a4eb08",
          "message": "chore: remove macro_rules semicolon (#3381)\n\nfix build warning",
          "timestamp": "2021-01-06T15:46:37+09:00",
          "tree_id": "afddb1695c354a4f98712745b23363ef96774bc8",
          "url": "https://github.com/phlip9/tokio/commit/e42317b072c5240fe190c0a8708cd24bb4a4eb08"
        },
        "date": 1609980948823,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 180913,
            "range": "± 43787",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 638194,
            "range": "± 156339",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5076414,
            "range": "± 1317422",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19722574,
            "range": "± 3111800",
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
      },
      {
        "commit": {
          "author": {
            "email": "liaoymxsdl@sina.com",
            "name": "Rust大闸蟹",
            "username": "baoyachi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e42317b072c5240fe190c0a8708cd24bb4a4eb08",
          "message": "chore: remove macro_rules semicolon (#3381)\n\nfix build warning",
          "timestamp": "2021-01-06T15:46:37+09:00",
          "tree_id": "afddb1695c354a4f98712745b23363ef96774bc8",
          "url": "https://github.com/phlip9/tokio/commit/e42317b072c5240fe190c0a8708cd24bb4a4eb08"
        },
        "date": 1609980943809,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1035,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15738,
            "range": "± 4231",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1046,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14988,
            "range": "± 3845",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 594,
            "range": "± 44",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "cc0911aa645cbaf5dee5b3d51efcfbe703159902",
          "message": "net: update datagram docs on splitting (#3448)",
          "timestamp": "2021-01-20T16:28:57+01:00",
          "tree_id": "6a9606182d62c927932ebdd5361899a12573b9b5",
          "url": "https://github.com/phlip9/tokio/commit/cc0911aa645cbaf5dee5b3d51efcfbe703159902"
        },
        "date": 1611171834272,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 835,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12518,
            "range": "± 2359",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 866,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13171,
            "range": "± 2331",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 497,
            "range": "± 17",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
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
        "date": 1607711764785,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6944732,
            "range": "± 2599165",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6992026,
            "range": "± 1714453",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6617180,
            "range": "± 3479596",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 801,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 792,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 795,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 63512,
            "range": "± 6524",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1112,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1096987,
            "range": "± 119710",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 769825,
            "range": "± 91446",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liaoymxsdl@sina.com",
            "name": "Rust大闸蟹",
            "username": "baoyachi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e42317b072c5240fe190c0a8708cd24bb4a4eb08",
          "message": "chore: remove macro_rules semicolon (#3381)\n\nfix build warning",
          "timestamp": "2021-01-06T15:46:37+09:00",
          "tree_id": "afddb1695c354a4f98712745b23363ef96774bc8",
          "url": "https://github.com/phlip9/tokio/commit/e42317b072c5240fe190c0a8708cd24bb4a4eb08"
        },
        "date": 1609980935731,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6786753,
            "range": "± 2997987",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6635060,
            "range": "± 2000838",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6165944,
            "range": "± 2348584",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 620,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 620,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 621,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 85525,
            "range": "± 3980",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1365,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1140106,
            "range": "± 8440",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 860149,
            "range": "± 406142",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}